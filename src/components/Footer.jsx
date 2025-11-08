export default function Footer() {
  return (
    <footer className="bg-blue-700 text-white py-6 text-center">
      <p>© {new Date().getFullYear()} Wash Depot Laundry. All rights reserved.</p>
      <p className="text-sm text-blue-200 mt-1">Clean • Fast • Friendly</p>
    </footer>
  );
}
