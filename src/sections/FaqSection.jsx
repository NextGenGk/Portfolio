import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

function FaqSection() {
  return (
    <section className="max-w-2xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Frequently Asked Questions
      </h2>

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>What do you build?</AccordionTrigger>
          <AccordionContent>
            I build responsive websites, modern web apps, and scalable APIs using React, Next.js, Node.js, and more.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>What tools do you use?</AccordionTrigger>
          <AccordionContent>
            Tools like VS Code, GitHub, Figma, Postman, and various build tools like Vite, Webpack, and more.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Are your components customizable?</AccordionTrigger>
          <AccordionContent>
            Absolutely! Built with TailwindCSS and Radix UI, all components are easy to restyle and extend.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}

export default FaqSection;
