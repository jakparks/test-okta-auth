'use client'

import { useRouter } from 'next/navigation';
import { toRelativeUrl } from '@okta/okta-auth-js';
import { useEffect } from 'react';
import { LoginCallback, useOktaAuth } from '@okta/okta-react';

export default function Login(){
	const { oktaAuth, authState } = useOktaAuth();
	return <LoginCallback></LoginCallback>
}