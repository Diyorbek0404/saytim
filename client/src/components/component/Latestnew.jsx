import Lsten from "./Lsten";

export default function Latestnew({posts, loading}) {

  if (loading) {
    return <h2 style={{color:"#666"}} className="m-5">
    Loading...
  </h2>
  }
  return (
    <>
     {
       posts.map((p) => {
         return (
          <Lsten key={p._id} post={p} />
         )
       })
     }
    </>
  );
}