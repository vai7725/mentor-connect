'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useRouter } from 'next/navigation';

const steps = [
  { id: 'personal', title: 'Personal Information' },
  { id: 'education', title: 'Education' },
  { id: 'experience', title: 'Work Experience' },
  { id: 'skills', title: 'Skills' },
];

const CandidatesPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const router = useRouter();

  const handleNextButton = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevButton = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSkipButton = () => {
    setCurrentStep(currentStep + 1);
    if (currentStep == steps.length) {
      router.push(`/dashboard`);
    }
  };

  const handleBackButton = () => {
    router.push(`/setup`);
  };

  return (
    <div className="container mx-auto max-w-2xl">
      <Card>
        <CardHeader>
          <CardTitle>Candidate Profile</CardTitle>
          <CardDescription>
            Step {currentStep + 1} of {steps.length}: {steps[currentStep].title}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {currentStep === 0 && (
            <div className="space-y-4">
              <div>
                <Label htmlFor="fullName">Full Name</Label>
                <Input id="fullName" placeholder="Rama Chandra" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="rama@example.com" />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="+91 9412345678" />
              </div>
            </div>
          )}
          {currentStep === 1 && (
            <div className="space-y-4">
              <div>
                <Label htmlFor="degree">Highest Degree</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your highest degree" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="highschool">High School</SelectItem>
                    <SelectItem value="bachelors">Bachelor's</SelectItem>
                    <SelectItem value="masters">Master's</SelectItem>
                    <SelectItem value="phd">Ph.D.</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="major">Field of Study</Label>
                <Input id="major" placeholder="e.g., Computer Science" />
              </div>
              <div>
                <Label htmlFor="graduationYear">Graduation Year</Label>
                <Input id="graduationYear" type="number" placeholder="YYYY" />
              </div>
            </div>
          )}
          {currentStep === 2 && (
            <div className="space-y-4">
              <div>
                <Label htmlFor="company">Most Recent Company</Label>
                <Input id="company" placeholder="Company name" />
              </div>
              <div>
                <Label htmlFor="jobTitle">Job Title</Label>
                <Input id="jobTitle" placeholder="e.g., Software Engineer" />
              </div>
              <div>
                <Label htmlFor="workDuration">Duration</Label>
                <Input id="workDuration" placeholder="e.g., 2 years" />
              </div>
              <div>
                <Label htmlFor="responsibilities">Key Responsibilities</Label>
                <Textarea
                  id="responsibilities"
                  placeholder="Describe your main duties and achievements"
                />
              </div>
            </div>
          )}
          {currentStep === 3 && (
            <div className="space-y-4">
              <div>
                <Label>Top Skills (Select up to 5)</Label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    'JavaScript',
                    'React',
                    'Node.js',
                    'Python',
                    'Java',
                    'Go',
                    'C++',
                    'AWS',
                    'Docker',
                    'AI/ML',
                  ].map((skill) => (
                    <label key={skill} className="flex items-center space-x-2">
                      <input type="checkbox" className="form-checkbox" />
                      <span>{skill}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <Label htmlFor="experience">Years of Experience</Label>
                <RadioGroup defaultValue="1-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="0-1" id="exp-0-1" />
                    <Label htmlFor="exp-0-1">0-1 years</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="1-2" id="exp-1-2" />
                    <Label htmlFor="exp-1-2">1-2 years</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="3-5" id="exp-3-5" />
                    <Label htmlFor="exp-3-5">3-5 years</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="5+" id="exp-5+" />
                    <Label htmlFor="exp-5+">5+ years</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-between">
          {currentStep > 0 ? (
            <Button onClick={handlePrevButton}>Previous</Button>
          ) : (
            <Button onClick={handleBackButton}>Back</Button>
          )}

          <div className="flex justify-center items-center gap-x-6">
            {currentStep === 2 && (
              <div
                className="underline text-sm font-semibold hover:cursor-pointer"
                onClick={handleSkipButton}
              >
                Skip
              </div>
            )}
            <Button onClick={handleNextButton}>
              {currentStep === steps.length - 1 ? 'Submit' : 'Next'}
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CandidatesPage;
