import Skeleton from "@/components/ui/Skeleton";
import Container from "@/components/ui/container";

interface Props {
  length: Product[] | undefined;
}

const Loading = ({ length }: Props) => {
  return (
    <Container>
      <div className="w-full h-full p-8">
        <Skeleton className="w-full aspect-square rounded-xl md:aspect-[2.4/1]" />
        <div className="lg:grid lg:grid-cols-5 lg:gap-x-8 mt-8 h-full">
          <div className="hidden lg:block">
            <Skeleton className="w-full h-[500px] rounded-xl" />
          </div>
          <div className="mt-6 lg:col-span-4 lg:mt-0">
            {length?.map((_, i) => (
              <div key={i} className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
                {/* Image & actions */}
                <div className="aspect-square rounded-xl bg-gray-100 relative">
                  <div className="animate-pulse bg-gray-300 w-full h-full rounded-md"></div>
                </div>

                {/* Name */}
                <div>
                  <div className="animate-pulse bg-gray-300 w-3/4 h-4 rounded-md mb-2"></div>
                  <div className="animate-pulse bg-gray-300 w-1/2 h-4 rounded-md"></div>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between">

                  <div className="animate-pulse bg-gray-300 w-1/4 h-4 rounded-md"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Loading;
