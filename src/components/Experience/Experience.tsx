import { useState } from 'react';
import { CaretDown, CaretUp, MapPin, Clock } from '@phosphor-icons/react';
import experiences from '../../data/experiences';
import {
  ExperienceSection,
  ExperienceCard,
  CardHeader,
  CompanyLogo,
  CardMeta,
  RoleTitle,
  CompanyName,
  MetaRow,
  Badge,
  Divider,
  DescriptionList,
  DescriptionItem,
  ToggleButton,
} from './style';

const PREVIEW_COUNT = 4;

function Experience() {
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});

  const toggle = (id: number) =>
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <ExperienceSection>
      {experiences.map((exp) => {
        const isExpanded = !!expanded[exp.id];
        const items = isExpanded
          ? exp.description
          : exp.description.slice(0, PREVIEW_COUNT);

        return (
          <ExperienceCard key={exp.id}>
            <CardHeader>
              <CompanyLogo>
                <img src={exp.logo} alt={exp.company} />
              </CompanyLogo>
              <CardMeta>
                <RoleTitle>{exp.role}</RoleTitle>
                <CompanyName href={exp.companyUrl} target="_blank" rel="noreferrer">
                  {exp.company}
                </CompanyName>
                <MetaRow>
                  <Badge>
                    <Clock size={11} style={{ marginRight: 4, verticalAlign: 'middle' }} />
                    {exp.period}
                  </Badge>
                  <Badge>
                    <MapPin size={11} style={{ marginRight: 4, verticalAlign: 'middle' }} />
                    {exp.location}
                  </Badge>
                  <Badge>{exp.type}</Badge>
                </MetaRow>
              </CardMeta>
            </CardHeader>

            <Divider />

            <DescriptionList>
              {items.map((item, i) => (
                <DescriptionItem key={i}>{item}</DescriptionItem>
              ))}
            </DescriptionList>

            {exp.description.length > PREVIEW_COUNT && (
              <ToggleButton type="button" onClick={() => toggle(exp.id)}>
                {isExpanded ? (
                  <>Ver menos <CaretUp size={14} /></>
                ) : (
                  <>Ver mais ({exp.description.length - PREVIEW_COUNT} itens) <CaretDown size={14} /></>
                )}
              </ToggleButton>
            )}
          </ExperienceCard>
        );
      })}
    </ExperienceSection>
  );
}

export default Experience;
