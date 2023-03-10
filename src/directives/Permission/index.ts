import store from '@/store';

export default {
  mounted(el: any, binding: any) {
    const { value } = binding;
    const prrmissions = store.getters.prrmissions as any || [];
    if (value && value instanceof Array && value.length > 0) {
      const permissionRoles = value;
      const hasPermission = prrmissions.some((role: any) => {
        return permissionRoles.includes(role);
      });
      if (!hasPermission) {
        el.parentNode && el.parentNode.removeChild(el);
      }
    } else {
      throw new Error(`need roles! Like v-permission="['user:editor', 'user:delete']"`);
    }
  }
};
