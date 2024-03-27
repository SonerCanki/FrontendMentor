function ResultSummary() {
  return (
    <div className="sm:container min-h-screen flex flex-col sm:flex-row items-center sm:justify-center">
      <div className="w-full sm:w-[20%] flex flex-col gap-5 items-center justify-center rounded-b-3xl  sm:rounded-3xl bg-gradient-to-t from-light-royal-blue to-light-slate-blue">
        <h1 className="text-lg mt-6 text-light-lavender">Your Result</h1>
        <div className="rounded-full h-40 w-40 gap-3 items-center justify-center flex flex-col  bg-gradient-to-t from-persian-blue to-violet-blue">
          <span className="text-5xl text-white">76</span>
          <span className="text-xs text-light-lavender"> of 100</span>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl text-white text-center">Great</h1>
          <span className="mx-12 mb-7 text-xs text-light-lavender text-center">
            You scored higher than %65 of the people who have taken these tests.
          </span>
        </div>
      </div>
      <div className="w-full sm:w-[20%] border-r-0 border-b-0 rounded-2xl shadow-lg shadow-pale-blue	">
        <div className="my-6 mx-6 flex flex-col rounded-2xl gap-6">
          <h4 className="text-lg font-semibold">Summary</h4>
          <div className=" flex flex-col gap-3">
            <div className="relative px-1 py-3 rounded-lg gap-2  bg-light-red flex  bg-opacity-10">
              <img
                src="/icon-reaction.svg"
                className="ml-2 text-opacity-60 text-light-red "
              />
              <span className="font-semibold text-sm text-opacity-60 text-light-red ">
                Reaction
              </span>
              <div className="right-3 absolute  ">
                <span className="text-sm font-semibold">80</span>
                <span className="text-sm text-light-lavender"> / </span>
                <span className="text-sm text-light-lavender">100</span>
              </div>
            </div>
            <div className="relative px-1 py-3 rounded-lg gap-2   bg-orangey-yellow  flex  bg-opacity-10">
              <img
                src="/icon-memory.svg"
                className="ml-2 text-opacity-60 text-orangey-yellow "
              />
              <span className="font-semibold text-sm  text-opacity-60 text-orangey-yellow ">
                Memory
              </span>
              <div className="right-3 absolute  ">
                <span className="text-sm font-semibold">92</span>
                <span className="text-sm text-light-lavender"> / </span>
                <span className="text-sm text-light-lavender">100</span>
              </div>
            </div>
            <div className="relative px-1 py-3 rounded-lg gap-2  bg-green-teal  flex  bg-opacity-10">
              <img
                src="/icon-verbal.svg"
                className="ml-2 text-opacity-60 text-green-teal "
              />
              <span className="font-semibold text-sm  text-opacity-60 text-green-teal  ">
                Verbal
              </span>
              <div className="right-3 absolute  ">
                <span className="text-sm font-semibold">61</span>
                <span className="text-sm text-light-lavender"> / </span>
                <span className="text-sm text-light-lavender">100</span>
              </div>
            </div>
            <div className="relative px-1 py-3 rounded-lg gap-2 bg-light-cobalt-blue  flex  bg-opacity-10">
              <img
                src="/icon-visual.svg"
                className="ml-2 text-opacity-60 text-light-cobalt-blue"
              />
              <span className="font-semibold text-sm text-opacity-60 text-light-cobalt-blue ">
                Visual
              </span>
              <div className="right-3 absolute  ">
                <span className="text-sm font-semibold">72</span>
                <span className="text-sm text-light-lavender"> / </span>
                <span className="text-sm text-light-lavender">100</span>
              </div>
            </div>
          </div>
          <button className="w-full rounded-3xl px-4 py-3 text-white text-sm  bg-dark-gray-blue hover:bg-gradient-to-t from-light-royal-blue to-light-slate-blue">
            Contiune
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResultSummary;
