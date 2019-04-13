import Link from "next/link";
import { Layout } from "../components/layout";
import { FelaComponent } from "react-fela";
const PostLink = props => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
      <a> {props.title} </a>
    </Link>
  </li>
);

const Index = () => (
  <Layout>
    <h1>Home page</h1>
    <ul>
      <PostLink id="111" title="Hello nextJs" />
      <PostLink id="222" title="Learn Next.js is awesome" />
      <PostLink id="333" title="Deploy apps with Zeit" />
    </ul>
  </Layout>
);

export default Index;
