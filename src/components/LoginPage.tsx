import { useState } from "react";
import { Eye, EyeOff, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AmorphicLogo } from "./AmorphicLogo";
import { AnalyticsIllustration } from "./AnalyticsIllustration";

interface LoginPageProps {
  onLogin: (email: string, password: string) => boolean;
}

export const LoginPage = ({ onLogin }: LoginPageProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isFormValid = email.trim() !== "" && password.trim() !== "";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      onLogin(email, password);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-6xl bg-card shadow-xl rounded-2xl overflow-hidden">
        <div className="flex flex-col md:flex-row min-h-[600px]">
          {/* Left Panel - Brand & Illustration */}
          <div className="flex-1 bg-primary-500 p-12 md:p-16 flex flex-col justify-center rounded-l-2xl">
            <div className="text-center md:text-left">
              <h1 className="text-heading-2xl font-bold text-primary-foreground mb-4">
                Data Insights to Accelerate Innovation
              </h1>
              <p className="text-md font-regular text-primary-foreground opacity-90 mb-12">
                Simplifies analytics for all users & teams
              </p>
              
              <div className="flex justify-center">
                <AnalyticsIllustration />
              </div>
            </div>
          </div>

          {/* Right Panel - Login Form */}
          <div className="flex-1 bg-card p-12 md:p-16 rounded-r-2xl">
            <div className="max-w-md mx-auto">
              {/* Version & Logo */}
              <div className="flex justify-between items-start mb-8">
                <AmorphicLogo />
                <span className="text-xs text-muted-foreground">Sandbox - v3.0.3</span>
              </div>

              {/* Login Title */}
              <div className="mb-8">
                <h2 className="text-heading-md font-semibold text-foreground">Login</h2>
                <p className="text-base text-muted-foreground mt-2">
                  Get Started with Amorphic – Manage Your Data in One Place
                </p>
              </div>

              {/* Form */}
              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Email Field */}
                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email or Username
                  </Label>
                  <Input
                    id="email"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 w-full border border-input rounded-md p-3 text-base focus:shadow-primary-2px focus:border-primary transition-all"
                    placeholder="Enter your email or username"
                  />
                </div>

                {/* Password Field */}
                <div>
                  <Label htmlFor="password" className="text-sm font-medium text-foreground">
                    Password
                  </Label>
                  <div className="relative mt-1">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full border border-input rounded-md p-3 pr-10 text-base focus:shadow-primary-2px focus:border-primary transition-all"
                      placeholder="Enter your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                  
                  {/* Forgot Password */}
                  <div className="text-right mt-2">
                    <a href="#" className="text-sm font-medium text-primary hover:underline">
                      Forgot Password?
                    </a>
                  </div>
                </div>

                {/* Login Button */}
                <Button 
                  type="submit"
                  disabled={!isFormValid}
                  className={`w-full font-semibold px-4 py-3 rounded-md mt-6 transition-all ${
                    isFormValid 
                      ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                      : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  Login
                </Button>

                {/* Register Link */}
                <div className="text-center mt-6">
                  <span className="text-base text-muted-foreground">
                    Don't have an account?{" "}
                    <a href="#" className="text-primary font-medium hover:underline">
                      Register here
                    </a>
                  </span>
                </div>
              </form>

              {/* Footer */}
              <div className="mt-12 pt-6 border-t border-border">
                <div className="flex flex-wrap justify-center gap-4 mb-4">
                  <a href="#" className="flex items-center text-xs text-muted-foreground hover:text-foreground transition-colors">
                    Developer Docs <ExternalLink size={12} className="ml-1" />
                  </a>
                  <a href="#" className="flex items-center text-xs text-muted-foreground hover:text-foreground transition-colors">
                    API Docs <ExternalLink size={12} className="ml-1" />
                  </a>
                  <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                    Give Feedback
                  </a>
                  <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                    Reset Application
                  </a>
                </div>
                <p className="text-xxs text-muted-foreground text-center">
                  © All rights reserved with Cloudwick Technologies
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};