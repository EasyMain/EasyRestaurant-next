export interface AlertProviderProps {
  children?: JSX.Element;
  defaultOptions?: AlertOptionsProps;
}

export interface AlertOptionsProps {
  title?: string;
  description: string;
  confirmationText: string;
  cancellationText: string;
}

export type AlertProviderResolveType = [() => void, () => void] | [];

export type AlertContextType = ((options: AlertOptionsProps) => Promise<void>) | undefined;