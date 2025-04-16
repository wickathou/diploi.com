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
  let utm: { [service: string]: string } | null = null;
  if (window && window.localStorage) {
    try {
      const { params, time } = JSON.parse(window.localStorage.getItem('utm') || '{}');
      if (Date.now() - time < 24 * 60 * 60 * 1000) {
        utm = params;
      }
    } catch (error) {
      console.error('Unable to parse UTM', error);
    }
  }

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
    if (window && window.localStorage) {
      window.localStorage.removeItem('utm');
    }

    window.location.href = `${apiUrl}/launch/${data.result.data.token}`;
  } else {
    // FIXME: This is too ugly...
    alert('Failed to start trial, please try again later...');
    button.disabled = false;
  }
};
