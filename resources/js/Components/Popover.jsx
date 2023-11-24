import React from "react";
import {Popover as Popov, PopoverTrigger, PopoverContent, Button, Input} from "@nextui-org/react";

export default function Popover({title='', children}) {
  return (
    <Popov placement="bottom" showArrow offset={10}>
      <PopoverTrigger>
        <Button color="primary">Customize</Button>
      </PopoverTrigger>
      <PopoverContent className="w-[240px]">
        {(titleProps) => (
          <div className="px-1 py-2 w-full">
            {title &&
                <p className="text-small font-bold text-foreground" {...titleProps}>
                    {title}
                </p>
            }
            <div className="mt-2 flex flex-col gap-2 w-full">
                {children}
            </div>
          </div>
        )}
      </PopoverContent>
    </Popov>
  );
}
