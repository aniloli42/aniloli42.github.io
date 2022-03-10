const Journey = ({ startdate, enddate, title, description }) => {
  return (
    <div className='relative mb-3 pl-6 shadow-sm after:absolute after:left-0 after:top-0 after:h-6 after:w-6 after:-translate-x-[55%] after:rounded-full after:border-4 after:border-main/20 after:bg-secondary after:[content:""] md:pl-8'>
      <div className='relative bg-secondary px-4 py-2 shadow-[0rem_0rem_.2rem_.05rem] shadow-black/10 after:absolute after:top-0 after:left-0 after:h-0 after:w-0 after:-translate-x-full after:translate-y-1/4  after:border-t-[8px] after:border-b-[8px] after:border-r-[10px] after:border-main/20 after:border-t-transparent after:border-b-transparent after:[content:""]'>
        <div>
          <p className='text-md text-sm text-main/60'>
            {`${
              startdate && enddate
                ? `${startdate} - ${enddate}`
                : startdate
                ? `${startdate}`
                : `${enddate}`
            }`}
          </p>
        </div>
        <h2 className='text-xl font-semibold text-main'>{title}</h2>
        <p className='my-2 text-main/80'>{description}</p>
      </div>
    </div>
  );
};

export default Journey;