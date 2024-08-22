function SkillsList({src, skill}) {
  return (
    <span>
      <img src={src} alt="CheckMark Icono" />
      <p>{skill}</p>
    </span>
  )
}

export default SkillsList