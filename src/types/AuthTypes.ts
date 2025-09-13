
export interface FoxHubForm {
  formType: "signup" | "login";
  onSubmit: (data: { name?: string; email: string; password: string }) => void;
}
