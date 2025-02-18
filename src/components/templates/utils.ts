const CONSOLE_URL = 'https://console.diploi.com';

export const launchTemplateWithTryOut = async (
  template: string,
  consoleUrl = CONSOLE_URL
) => {
  window.location.href = consoleUrl;

  // const buttons = document.querySelectorAll(`[data-launch]`);
  // buttons.forEach((button) => button.setAttribute('disabled', 'true'));

  // const response = await fetch(
  //   `${consoleUrl}/api/account/create-anonymous-trial`,
  //   {
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     },
  //     method: 'POST',
  //     body: JSON.stringify({
  //       template: template,
  //       token: 'token', // TODO: ??
  //     }),
  //   }
  // );

  // const data = await response.json();
  // if (data.status === 'ok') {
  //   window.location.href = `${consoleUrl}/launch/${data.token}`;
  // } else {
  //   // FIXME: This is too ugly...
  //   alert('Failed to start trial, please try again later...');
  //   buttons.forEach((button) => button.removeAttribute('disabled'));
  // }
};
