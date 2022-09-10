const RoomTitle = () => {
  return (
    <div className=' relative'>
      <div className='text-center'>
        <h1 className='text-2xl after:absolute after:w-14 after:bg-[#87a13c] after:h-1 grid grid-cols-1 after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 pb-10 '>
          Nos Chambres
        </h1>
        <p className='pt-4'>
          Maecenas feugiat mattis ipsum, vitae semper massa porttitor sit amet.
          Nulla mattis, urna et posuere ornare, neque leo dapibus ante, nec
          dignissim.
        </p>
      </div>
    </div>
  );
};

export default RoomTitle;
