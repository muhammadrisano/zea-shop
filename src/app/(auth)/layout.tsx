import React from "react";
import { Icon } from "../../../components";
import * as MyComponent from '../../../components'

const layout  = ({ children, head }: { children: React.ReactNode, head: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex items-center">
      <div className="mx-auto h-fit">
        <div className="flex flex-col items-center gap-y-6">
          <div className="flex w-fit gap-2 items-center">
            <Icon.IcBrand className="mx-auto" />
            <p className="text-clr-primary font-bold">Shop App</p>
            
            
          </div>
          {/* <h3 className="text-center text-lg font-bold">Please sign with your account</h3> */}
           {head}

          <div>
            <MyComponent.Molecules.ButtonTap/>  
          </div>
        </div>
        {children}
      </div>
 
    </div>
  );
};

export default layout;
