"use client";

import DottesSeparators from "../dottes-separators";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const SignInCard = () => {
  return (
    <Card className="w-full h-full md:w-[487px] border-none shadow-none">
      <CardHeader className="flex items-center justify-center text-center p-7">
        <CardTitle className="text-2xl">Welcome back</CardTitle>
      </CardHeader>
      <div className="px-7 mb-2">
        <DottesSeparators />
      </div>
      <CardContent className="p-7">
        <form className="space-y-7"></form>
      </CardContent>
    </Card>
  );
};

export default SignInCard;
