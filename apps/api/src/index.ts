import {
	defineAbilityFor,
	projectSchema,
	userSchema,
	organizationSchema,
} from "@saas/auth";

const ability = defineAbilityFor({ role: "ADMIN", id: "user-id" });
