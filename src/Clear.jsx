export const Clear = ({ clear }) => {
  return (
    <>
      <div onClick={() => clear()} className='Clear res'>
        CE
      </div>
    </>
  );
};
