import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

type Props = {};

export default function Instructions({}: Props) {
  return (
    <div>
      <h2>Testing instructions</h2>
      <p>Instrucitons will be here</p>
      <Link href={'/credentia-testing/test'}>
        <Button>Start test</Button>
      </Link>
    </div>
  );
}
