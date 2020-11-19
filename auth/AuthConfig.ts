// Denne komponent er der hvor appen bliver registreret i active directory og de adgange den microsoft grap spørger om når man logger ind
export const AuthConfig = {
  appId: '4fc3ba21-4fb9-428e-8c8f-e1a5b618f8bf',
  appScopes: [
    'openid',
    'offline_access',
    'profile',
    'User.Read',
    'Calendars.Read',
  ],
};
