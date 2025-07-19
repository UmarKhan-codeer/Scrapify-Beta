"use client"
import SummarizationForm from '@/components/SummarizationForm';

export default function SummarizePage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">
          AI-Powered Content Summarization
        </h1>
        <SummarizationForm />
      </div>
    </div>
  );
}