import img from "../../../assets/img/images (1).jpg";
const AboutUs = () => {
    return (
        <div className='md:flex justify-center items-center md:mt-28 my-10 bg-cyan-700 p-5'>
            <div className='md:w-1/2 text-center text-gray-200 p-2'>
                <h3 className='font-mono text-2xl'>About Us</h3>
                <h1 className='font-serif font-bold text-2xl p-2'>ZooZest Toys</h1>
                <hr className='w-24 font-extrabold bg-white border-b-2 mx-auto' />
                <hr className='w-28 mt-1 font-extrabold bg-white border-b-2 mx-auto' />
                <p className='p-5'>The toy website is an online platform that offers a wide range of toys for children of all ages. It aims to provide a convenient and enjoyable shopping experience for parents, guardians, and toy enthusiasts. The website features a user-friendly interface, allowing visitors to easily browse through various categories of toys, including educational toys, action figures, board games, dolls, puzzles, and more.</p>
                <button className='btn-primary'>Read More</button>
            </div>
            <div className='md:w-1/2 p-2'>
                    <img className='w-full h-full' src={img}   alt="" />
            </div>
        </div>
    );
};

export default AboutUs;