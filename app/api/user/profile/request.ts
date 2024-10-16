import { proposal } from '@prisma/client';
import { cookies } from 'next/headers';
import { getCookies } from 'cookies-next';
import fetchUserDataServer from '@/utils/fetchUserDataServer';

export async function getProfile() {
  // const token = getCookies({ cookies });
  // const data = await fetchUserDataServer(token.accessToken as string);
  const res = await fetch('api/user/profile', {
    method: 'GET',
  });

  return res.json();
}

// export async function createProfile(params: proposal) {
//   const res = await fetch(url, {
//     method: 'POST',
//     // headers: headers,
//     // body: params,
//   });
// }

export async function updateProfile(params: type) {
  const res = await fetch(url, {
    method: 'PUT',
  });
}
