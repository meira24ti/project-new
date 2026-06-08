export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#00B074] to-[#00d084] flex items-center justify-center font-bold text-xl shadow-lg shadow-green-500/20">
        S
      </div>

      <div>
        <h1 className="text-xl font-bold text-white">
          Sedap
        </h1>

        <p className="text-xs text-gray-400">
          Modern Food Marketplace
        </p>
      </div>
    </div>
  );
}