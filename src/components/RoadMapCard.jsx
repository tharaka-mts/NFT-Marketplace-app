const RoadMapCard = ({ className, month, title, desc }) => {
  return (
    <div className={`${className}`}>
      <div className="w-[510px] h-[224px] bg-gradient-to-br from-sky-500/10 to-purple-500/10 border-solid border-2 border-violet-500/50 backdrop-blur-lg rounded-xl p-5 font-clash">
        <h3 className="text-center text-[20px] font-normal">{month}</h3>
        <h2 className="text-[32px] font-semibold">{title}</h2>
        <p className="mt-3 text-slate-300">{desc}</p>
      </div>
    </div>
  );
};

export default RoadMapCard;
