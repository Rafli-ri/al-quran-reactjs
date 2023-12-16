const AudioFooter = ({ audio }) => {
  return (
    <footer className="sticky bottom-4 ">
      <audio
        src={audio}
        className="block w-4/5 sm:w-full max-w-xl mx-auto"
        controls
      />
    </footer>
  );
};

export default AudioFooter;
