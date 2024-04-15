import { useOrganizationList } from "@clerk/nextjs";

function DashboardPage() {
  const { organizationList, isLoaded, setActive } = useOrganizationList();
  useEffect(() => {
    if (isLoaded) {
      // Find the admin organization from the loaded organization list
      const adminOrganization = organizationList.find(
        (org) => org.membership.role === "admin"
      );

      // If the user is not an admin, redirect to the homepage
      if (!adminOrganization || adminOrganization.membership.role !== "admin") {
        router.push("/"); // Replace '/' with the homepage URL
      } else {
        // If the user is an admin, no need to wait for the organization list; render the admin page directly
        setShowLoader(false);
      }
    }
  }, [isLoaded, organizationList]);
  return (
    <div>
      <h1>dashboard page</h1>
    </div>
  );
}

export default DashboardPage;
