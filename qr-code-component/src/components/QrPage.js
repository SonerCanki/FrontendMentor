
function QrPage() {
  return (
    <div className="h-screen flex items-center justify-center">
        <div className="sm:w-[20%] w-[80%] flex flex-col rounded-3xl justify-center items-center bg-white">
            <img src="image-qr-code.png" className="p-[4%]  rounded-3xl"></img>
            <h1 className="font-bold text-center p-[5%] text-2xl font-sans text-dark-blue">Improve your front-end skills by building projects</h1>
            <span className="text-center text-xl pt-[2%] pb-[8%] px-[5%] font-sans text-grayish-blue">
            Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
            </span>
        </div>
    </div>
  );
}

export default QrPage;