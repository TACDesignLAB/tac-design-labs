import Image from 'next/image';
import Link from 'next/link';

import type { WorkDetails } from '~/constants/works/models';

interface ProjectTileProps {
  project: WorkDetails;
}

const ProjectTile = ({ project }: ProjectTileProps) => {
  return (
    <div className="w-full md:w-[48%] lg:w-[45%] xl:w-[40%]">
      <Link href={`/our-work/${project.id}`}>
        <div className="group relative aspect-[16/9] transform rounded-2xl border-8 border-[#F3F5E5] shadow-custom transition-transform duration-300 ease-out hover:scale-105 hover:cursor-pointer">
          <div className="absolute inset-0 z-10 rounded-2xl bg-gradient-to-t from-[#000000] to-transparent opacity-70 mix-blend-multiply transition delay-150 duration-300 ease-in-out group-hover:opacity-20"></div>
          <Image
            src={project.tileImg}
            alt={`${project.title} project`}
            fill
            className="rounded-xl object-cover"
          />
          <div className="absolute bottom-3 left-4 z-20 text-white">
            <p className="text-2xl font-bold tracking-widest md:text-4xl lg:text-[42px]">
              {project.title}
            </p>
            <p className="text-base text-[#FCBF89] md:text-lg lg:text-xl xl:text-2xl">
              {project.location}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProjectTile;
