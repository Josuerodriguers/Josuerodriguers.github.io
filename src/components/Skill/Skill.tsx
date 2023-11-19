import { SkillDescription } from './style'

type SkillProps = {
  children: React.ReactNode,
  title: string,
  icon?: React.ComponentType<{ size: number }>,
}

function Skill(props: SkillProps) {
  const { children, title} = props;
  return (
    <SkillDescription>

      <h4>{title}</h4>
      <p>
        {children}
      </p>
    </SkillDescription>
  )
}

export default Skill