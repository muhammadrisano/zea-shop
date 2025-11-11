import React from "react";
import * as MyComponent from "../../../components";

const Component = () => {
  return (
    <nav className="flex justify-between p-4 shadow-sm">
      <div className="flex">
        <div className="flex items-center gap-2">
          <MyComponent.Icon.IcBrand />
          <span className="text-2xl text-clr-primary font-bold items-center">
            Zea Shop
          </span>
        </div>
        <div className="w-100 flex pl-3 items-center gap-3">
          <MyComponent.Attom.Input
            placeholder="Search product..."
            variant="search"
            className="w-80"
          />
          <MyComponent.Attom.Button variant="iconBorder">
            <MyComponent.Icon.IcFilter />
          </MyComponent.Attom.Button>
        </div>
      </div>
      <ul className="flex items-center gap-4">
        <li>
          <MyComponent.Attom.Button variant="icon">
            <MyComponent.Icon.IcCart/>
          </MyComponent.Attom.Button>
        </li>
        <li>
          <MyComponent.Attom.Button variant="primary" label="Login" size="medium"/>
        </li>
         <li>
          <MyComponent.Attom.Button variant="secondary" label="signup" size="medium"/>
        </li>
      </ul>
    </nav>
  );
};

export default Component;
