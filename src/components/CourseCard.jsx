// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
import PropTypes from "prop-types";

export function CourseCard({ title, description, price, image, imageAlt }) {
  return (
    // <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
    <>
      <div className="h-64 bg-gradient-to-br from-gray-200 to-gray-300">
        <img
          src={image || "/placeholder.svg"}
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
      </div>
      {/* // <CardContent className="p-6 space-y-4"> */}
      <h3 className="text-2xl font-semibold text-foreground">{title}</h3>
      <p className="text-base text-foreground/70 leading-relaxed">
        {description}
      </p>
      <p className="text-sm font-bold text-foreground">{price}</p>
      {/* <Button className="w-full bg-[#FD8D3C] hover:bg-[#FD8D3C]/90 text-white font-bold">
          Записаться
        </Button>
      </CardContent> */}
      {/* // </Card> */}
    </>
  );
}

CourseCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  image: PropTypes.string,
  imageAlt: PropTypes.string,
};
