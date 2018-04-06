import { lifecycle, compose, renderComponent, branch } from "recompose";
import queryString from "query-string";
import { baseUrl } from "../config/api";
import Loading from "../components/Loading";
import ErrorRenderer from "../components/Error";

const getExpandedEntity = (data, expand) =>
  data && data[0] ? data[0][expand] : {};

const apiEnhancer = (resource, loadingPredicate, expand) =>
  compose(
    lifecycle({
      async componentDidMount() {
        try {
          const data = await fetch(
            `${baseUrl}/${resource}?${queryString.stringify(
              this.props.match.params
            )}${expand ? `&_expand=${expand}` : ""}`
          )
            .then(response => {
              // Check for error codes
              if (response.ok) {
                return response;
              } else {
                throw Error(
                  `Request failed with error ${response.status} ${
                    response.statusText
                  }`
                );
              }
            })
            .then(response => response.json());
          this.setState({
            [resource]: data,
            [expand]: getExpandedEntity(data, expand),
            error: null,
            loading: false
          });
        } catch (e) {
          console.log("error", e);
          this.setState({ error: e, [resource]: null, loading: false });
        }
      }
    }),
    branch(state => !!state.error, renderComponent(ErrorRenderer)),
    branch(loadingPredicate, renderComponent(Loading))
  );

export default apiEnhancer;
