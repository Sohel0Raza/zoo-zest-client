import useTitle from "../../hooks/useTitle";

const Blogs = () => {
    useTitle('Blogs')
  return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:w-10/12 mx-auto p-5 my-10">
        <div className="shadow-2xl p-5 rounded">
          <h3 className="text-xl font-semibold px-5 my-2 text-amber-500">
          What is an access token and refresh token? How do they work and where should we store them on the client-side?
          </h3>
          <p className="p-5">
            <span className="font-bold">Refresh token</span> helps re-validate a user without them having to re-enter their login credentials multiple times.  <br />
            <span className="font-bold">Access token </span>is re-issued, provided the refresh token is a valid one requesting permission to access confidential resources. <br />
            <span className="font-bold">We can store </span> the access token and refresh token in the server-side session.
          </p>
        </div>
        <div className="shadow-2xl p-5 rounded">
          <h3 className="text-xl font-semibold px-5 my-2 text-amber-500">
          Compare SQL and NoSQL databases?
          </h3>
         <p className="p-5">
         <span className="font-bold">SQL databases </span> are vertically scalable. SQL databases are table-based.  SQL databases are better for multi-row transactions. <br />
          <span className="font-bold">NoSQL databases</span> are horizontally scalable. NoSQL databases are document, key-value, graph, or wide-column stores. NoSQL is better for unstructured data like documents or JSON.
         </p>
          </div>
        <div className="shadow-2xl p-5 rounded">
          <h3 className="text-xl font-semibold px-5 my-2 text-amber-500">
          What is express js? What is Nest JS ?
          </h3>
          <p className="p-5">
            <span className="font-bold"> Express.js </span> is a framework based
            on Node.js which is used for building web-application using
            approaches and principles of Node.js event-driven architecture. <br />
            <span className="font-bold">Nest js</span> one of the fastest-growing Node. js frameworks for building efficient, scalable, and enterprise-grade backend applications using Node. js. It is known for producing highly testable, maintainable, and scalable applications using modern JavaScript and TypeScript.
          </p>
        </div>
        <div className="shadow-2xl p-5 rounded">
          <h3 className="text-xl font-semibold px-5 my-2 text-amber-500">
          What is MongoDB aggregate and how does it work?
          </h3>
          <p className="p-5">
          <span className="font-bold">MongoDB aggregate </span>
          is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.
          </p>
        </div>
      </div>
  );
};

export default Blogs;
