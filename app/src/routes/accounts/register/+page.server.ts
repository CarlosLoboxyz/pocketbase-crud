import { error, redirect } from "@sveltejs/kit";

export const actions = {
    register: async ({ request, locals  }) => {
        const body = Object.fromEntries(await request.formData());

        try {
            await locals.pb.collection('users').create({ ...body });
            await locals.pb.collection('users');
        } catch(err) {
            console.error('Error: ', err);
            throw error(500, 'Something went wrong');
        }

        throw redirect(303, '/accounts/login');
    }
};
