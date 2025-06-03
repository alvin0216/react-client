import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { Controller, type FieldErrors, type UseFormReturn } from 'react-hook-form';

interface EmailTelInputProps {
  type: 'email' | 'tel';
  errors: FieldErrors<{
    email?: string;
    tel?: string;
  }>;
  control: UseFormReturn['control'];
}

export const EmailTelInput: React.FC<EmailTelInputProps> = ({ type, errors, control }) => {
  if (type === 'email') {
    return (
      <Controller
        name="email"
        control={control}
        rules={{
          required: 'Email is required',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: 'Invalid email address',
          },
        }}
        render={({ field }) => (
          <TextField {...field} fullWidth label={'Email'} error={!!errors.email} helperText={errors.email?.message} />
        )}
      />
    );
  }

  return (
    <div className="flex gap-4">
      <Controller
        name="email"
        render={({ field }) => (
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select {...field} labelId="demo-simple-select-label" id="demo-simple-select" label="Age">
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        )}
      />
      <Controller
        name="tel"
        control={control}
        render={({ field }) => (
          <TextField {...field} fullWidth label={'Tel'} error={!!errors.tel} helperText={errors.tel?.message} />
        )}
      />
    </div>
  );
};
