
const VendorModal = () => {
  return (
    <>
    <section className='grid grid-flow-row justify-items-center items-center p-10 bg-harvestaSecondBlack w-full h-[100vh] font-primary'>
    <div className='w-auto h-auto p-2 bg-white rounded-lg '>
        <div className='p-4'>
            <h2 className='text-[16px] font-semibold'>Are you sure your product menu meets the requirements?</h2>
            <p className='text-[11px] text-center font-semibold'>We will only process if your product menu meets the requirements</p>

            <div className='grid grid-flow-col justify-items-center items-center mt-6'>
                <button className='bg-tertiaryGreen text-[12px] font-bold p-2.5 rounded-full w-1/2 hover:bg-tertiaryGreenHover'>Re-upload</button>
                <button className='bg-primary text-white text-[12px] font-bold p-2.5 rounded-full w-1/2 hover:bg-primaryHover'>Finish</button>
                
            </div>
        </div>
      </div>
    </section>
     
    </>
  )
}

export default VendorModal