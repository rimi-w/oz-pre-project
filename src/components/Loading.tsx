import fork from "../assets/fork.png";
import knife from "../assets/knife.png";

function Loading() {
  return (
    <article className="flex flex-col gap-10 m-8">
      <div className="flex justify-center invert relative">
        <img
          src={fork}
          className="h-[250px] rounded-4xl rotate-45 animate-spin-slow opacity-70"
        />
        <img
          src={knife}
          className="h-[250px] rounded-4xl -rotate-45 animate-spin-reverse opacity-70 absolute"
        />
      </div>
      <p className="text-2xl">맛집을 불러오는 중입니다...</p>
    </article>
  );
}

export default Loading;
