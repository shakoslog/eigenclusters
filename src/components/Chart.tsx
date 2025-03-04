import { ShareButton } from './ShareButton';

interface ChartProps {
  prompt: string;
  model: string;
  response: any;
  // ... other props
}

export function Chart({ prompt, model, response, ...props }: ChartProps) {
  return (
    <div className="relative">
      {/* Existing chart content */}
      
      {/* Add ShareButton in the top-right corner */}
      <div className="absolute top-4 right-4">
        <ShareButton 
          chartState={{
            prompt,
            model,
            response,
          }}
        />
      </div>
      
      {/* Rest of chart content */}
    </div>
  );
} 