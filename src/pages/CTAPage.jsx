// src/pages/CTAPage.jsx
import CarouselComponent from '../components/CarouselComponent';
import SignUpForm from '../components/SignUpForm';

const CTAPage = () => {
    return (
        <div className="flex h-screen">
            <div className="w-1/2 bg-purple-800 text-white flex items-center justify-center">
                <CarouselComponent />
            </div>
            <div className="w-1/2 bg-violet-100 flex items-center justify-center">
                <SignUpForm />
            </div>
        </div>
    );
};

export default CTAPage;
