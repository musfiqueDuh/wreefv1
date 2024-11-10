// src/pages/CTAPage.jsx
import CarouselComponent from '../components/CarouselComponent';
import SignUpForm from '../components/SignUpForm';

const CTAPage = () => {
    return (
        <div className="flex flex-col lg:flex-row lg:h-screen">
            {/* Carousel Section */}
            <div className="w-full lg:w-1/2 bg-purple-800 text-white flex items-center justify-center">
                <CarouselComponent />
            </div>
            {/* Form Section */}
            <div className="w-full lg:w-1/2 bg-violet-100 flex items-center justify-center p-4">
                <SignUpForm />
            </div>
        </div>
    );
};

export default CTAPage;
