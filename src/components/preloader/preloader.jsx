const Preloader = () => {
  return (
    <>
      <h1 style={{textAlign: `center`, position: `fixed`, top: `50%`, left: `50%`, transform: `translate(-50%, -50%)`}}>
        Hold on a sec, we are loading
        <br />
        <small>If it takes longer than a few secs,
          <br />
        please, refresh the page.</small>
      </h1>
    </>
  );
};


export default Preloader;
