import React from "react";
import { CardFooter } from "reactstrap";

const AppFooter = () => {
  return (
    <>
        <CardFooter className="bg-dark text-center p-1">
          <h3 className=" text-primary font-weight-light">
            Thank you for choosing us!
          </h3>
          <h4 className=" text-info mb-1 font-weight-light">
            <i className="ni ni-compass-04" /> KubNaz 2022
          </h4>
        </CardFooter>
    </>
  );
};
export default AppFooter;
