import { clearUtmParams, getUtmParams } from '../../utils/utmUtils';

export const launchStack = async ({
  button,
  componentIds,
  apiUrl,
}: {
  button: HTMLButtonElement;
  componentIds: number[];
  apiUrl: string;
}) => {
  button.disabled = true;

  // Check if this user came from an AD campaing
  const utm = getUtmParams();

  const response = await fetch(`${apiUrl}/api/trpc/account.anonymousTrialCreate`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      componentIds,
      utm,
    }),
  });

  const data = await response.json();
  if (data.result.data.status === 'ok') {
    clearUtmParams();
    window.location.href = `${apiUrl}/launch/${data.result.data.token}`;
  } else {
    // Move to the login screen as a fallback
    // TODO: In the future, move to a different screen based on the error we throw (verification requred, over limit)
    window.location.href = `${apiUrl}/login`;
  }
};
