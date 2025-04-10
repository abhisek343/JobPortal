import React from 'react';
// Import necessary UI components from their respective paths
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { Button } from './ui/button';
// Import Redux hooks and actions
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSearchedQuery } from '@/redux/jobSlice';

// Define the list of job categories
const category = [
    "Frontend Developer",
    "Backend Developer",
    "Data Science",
    "Graphic Designer",
    "FullStack Developer"
];

// Define the CategoryCarousel component
const CategoryCarousel = () => {
    // Get the dispatch function from Redux
    const dispatch = useDispatch();
    // Get the navigate function from React Router
    const navigate = useNavigate();

    // Handler function to set the search query and navigate to the browse page
    const searchJobHandler = (query) => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }

    return (
        <div>
            {/* Main Carousel container */}
            <Carousel className="w-full max-w-xl mx-auto my-20">
                {/* Carousel content area where items are displayed */}
                <CarouselContent>
                    {
                        // Map over the category array to render each category as a CarouselItem
                        category.map((cat, index) => (
                            // Add the unique key prop here using the category name 'cat'
                            <CarouselItem key={cat} className="md:basis-1/2 lg-basis-1/3">
                                {/* Button representing the category */}
                                <Button onClick={() => searchJobHandler(cat)} variant="outline" className="rounded-full">{cat}</Button>
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
                {/* Navigation button for the previous item */}
                <CarouselPrevious />
                {/* Navigation button for the next item */}
                <CarouselNext />
            </Carousel>
        </div>
    )
}

// Export the component for use in other parts of the application
export default CategoryCarousel;
