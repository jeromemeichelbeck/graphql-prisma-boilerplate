import getUserId from '../../utils/getUserId'

const me = async (parent, args, { prisma, request }, info) => {
  const userId = getUserId(request)

  return prisma.query.user({
    where: {
      id: userId
    }
  })
}

export { me as default }
