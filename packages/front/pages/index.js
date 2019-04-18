import { withRouter } from "next/router";
import { Layout } from "../components/layout";
import { FelaComponent } from "react-fela";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const TEST = gql`
  {
    weekly {
      current {
        aries {
          common
        }
      }
    }
  }
`;

const Index = props => {
  const sign = props.router.query.sign;
  return (
    <Layout>
      <h1>Home page</h1>
      <Query query={TEST}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;

          return <p>{data.weekly.current.aries.common}</p>;
        }}
      </Query>
    </Layout>
  );
};

export default withRouter(Index);
