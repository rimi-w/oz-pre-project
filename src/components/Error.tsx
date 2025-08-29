import { useRouteError } from "react-router";
import fork from "../assets/fork.png";
import knife from "../assets/knife.png";

function Error() {
  const error = useRouteError() as Error;

  return (
    <article className="flex flex-col items-center gap-10 m-8">
      <div className="flex justify-center invert relative">
        <img
          src={fork}
          className="h-[250px] rounded-4xl rotate-45 opacity-70"
        />
        <img
          src={knife}
          className="h-[250px] rounded-4xl -rotate-45 opacity-70 absolute"
        />
      </div>
      <p className="text-2xl text-[#ff3232c6]">Error 발생!!</p>
      <p className="text-2xl text-[#ff3232c6]">{error.message}</p>
    </article>
  );
}

export default Error;
